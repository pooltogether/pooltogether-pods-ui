export const customStyles = {
  container: (styles: Object) => ({
    ...styles,
    border: 'none',
    background: 'rgba(14,163,164,0.2)',
    color: '#FFF !important'
  }),
  option: (styles: Object) => ({
    ...styles,
    // background: "rgba(14,163,164,0.2)",
    border: 'none',
    color: '#FFF !important'
  }),
  menu: (styles: Object) => ({
    ...styles,
    // background: "rgba(14,163,164,0.8)",
    background: '#1d3941',
    color: '#FFF !important'
  }),
  menuList: (styles: Object) => ({
    ...styles,
    // background: "rgba(14,163,164,0.4)",
    background: '#1d3941',
    color: '#FFF !important'
  }),
  control: (styles: Object) => ({
    ...styles,
    border: 'none',
    height: 50,
    flex: 1,
    marginTop: 0,
    backgroundColor: 'rgba(14,163,164,0.2)',
    color: '#FFF !important'
  }),
  input: (styles: Object) => ({
    ...styles,
    border: 'none',
    // background: "rgba(14,163,164,0.2)",
    color: '#000 !important'
  }),
  placeholder: (styles: Object) => ({
    ...styles,
    // background: "rgba(14,163,164,0.2)",
    color: '#FFF !important'
  }),
  singleValue: (styles: Object) => ({
    // background: "rgba(14,163,164,0.2)",
    ...styles,
    color: '#FFF !important'
  }),
  valueContainer: (styles: Object) => ({
    // background: "rgba(14,163,164,0.2)",
    color: '#000 !important',
    ...styles
  }),
  indicatorSeparator: (styles: Object) => ({
    // background: "rgba(14,163,164,0.2)",
    display: 'none',
    color: '#FFF !important',
    ...styles
  })
}
