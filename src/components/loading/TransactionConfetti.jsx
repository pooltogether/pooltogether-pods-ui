/* --- Global Modules --- */
import idx from 'idx'
import Link from 'next/link'
import React, { useState, useMemo, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'

/* --- Local Modules --- */
import { Spacer } from '@components/'
/**
 * @name TransactionConfetti
 * @param {Object} props
 */
export const TransactionConfetti = ({ state, amount, action, symbol, ...props }) => {
  const confettiRef = useRef()
  const [isRewarded, isRewardedSet] = useState(false)
  const [isConfettiEnabled, isConfettiEnabledSet] = useState(true)

  useEffect(() => {
    if (idx(state, (_) => _.status) == 'Success') {
      isConfettiEnabledSet(true)
      setTimeout(() => isConfettiEnabledSet(false), 8000)
    }
  }, [state])

  useEffect(() => {
    if (!isRewarded && confettiRef.current && confettiRef.current.rewardMe) {
      setTimeout(() => {
        isRewardedSet(true)
        confettiRef.current.rewardMe({
          elementSize: 250
        })
        return isRewardedSet(false)
      }, 800)
    }
  }, [confettiRef])

  return useMemo(() => {
    if (idx(state, (_) => _.status) == 'Success') {
      return (
        <>
          <span className='absolute top-0 left-60 right-60 bottom-0 overflow-hidden mx-auto z--1'>
            {isConfettiEnabled && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
          </span>
          <div className='text-center'>
            <img className='inline-block' src='/images/checkmark.png' width={72} />
            <Spacer className='my-10' />
            <span className='block text-2xl'>
              <span className='mr-1'>{action}</span>
              <span className='mr-1'>{amount}</span>
              <span className='mr-1'>{symbol}</span>
            </span>
            <Spacer className='my-6' />
            <div className=''>
              <Link href='/deposit'>
                <a className='text-teal-600 hove:text-teal-800 underline'>Back to Pod List</a>
              </Link>
            </div>
          </div>
        </>
      )
    }
    return null
  }, [state])
}

export default TransactionConfetti
