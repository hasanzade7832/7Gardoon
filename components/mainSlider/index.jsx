import SliderDetails from "./sliderDetails";

const getData = async()=>{
  const mainData = await fetch("https://7gardoon-server3.liara.run/api/activeSliders",{cache:"no-store"});
  return mainData.json()
}

const MainSlider = async () => {
  const dataSlider= await getData();
  console.log("dataSlider",dataSlider)
  return(
    <SliderDetails data={dataSlider}/>
  )
}

export default MainSlider;