const ColorItem = ({color,setColor}) => <div onClick={setColor} className="item" style={{'--bg-color':color }}></div>
export default ColorItem;