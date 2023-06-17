import { ColorRing } from "react-loader-spinner"

export const Loader = () => {
  return(
    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100%', minWidth: '500px'}}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#c0c0c0', '#c0c0c0', '#c0c0c0', '#c0c0c0', '#c0c0c0']}
      />
    </div>
  )
}
