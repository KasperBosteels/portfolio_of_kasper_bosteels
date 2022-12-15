interface Slotprops {
  value: number;
}
const Slot = (props: Slotprops) => {
  const fruits: string[] = [
    "../images/cherry.bmp",
    "../images/lemon.bmp",
    "../images/melon.bmp",
    "../images/purple.bmp",
    "../images/seven.bmp",
  ];
  return (
    <img
      style={{
        border: "solid",
        borderColor: "black",
        borderRadius: "2rem",
        borderWidth: 2,
        margin: 2,
        background: "black",
      }}
      width="15%"
      height="15%"
      src={fruits[props.value]}
      alt="iets"
    />
  );
};
export default Slot;
