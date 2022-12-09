interface Slotprops {
  value: number;
}
const Slot = (props: Slotprops) => {
  const fruits: string[] = [
    "./images/kpx3fxhl.bmp",
    "./images/wisvpjc4.bmp",
    "./images/xav8ui74.bmp",
    "./images/xwxw8ydf.bmp",
    "./images/zx5bv6uh.bmp",
  ];
  return (
    <img
      style={{
        border: "solid",
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 2,
        margin: 2,
        background: "black",
      }}
      width={50}
      height={50}
      src={fruits[props.value]}
      alt="iets"
    />
  );
};
export default Slot;
