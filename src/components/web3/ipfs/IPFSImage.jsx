export const IPFSImage = ({ hash, ...props }) => {
  return <img src={`https://cloudflare-ipfs.com/ipfs/${hash}`} {...props} />;
};
