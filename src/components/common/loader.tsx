import { Vortex } from  'react-loader-spinner'

const LoaderVortex = () => {
  return (
    <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
  )
}

export default LoaderVortex