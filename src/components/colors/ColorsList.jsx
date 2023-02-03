import { useState } from "react";
import { ColorPicker } from "./ColorPicker";

const availableColors = [
    'red',
    'green',
    'blue',
    'yellow',
]

export const ColorsList = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [colors] = useState(availableColors);

    return (
        <div className="App">
            <h1 style={{ color: selectedColor }}>
                {selectedColor || ' No color selected'}
            </h1>

            <ColorPicker
                colors={colors}
                value={selectedColor}
                onChange={(color) => {
                    setSelectedColor(color)
                }}
            />

            <select
                value={selectedColor}
                onChange={(event) => {
                    setSelectedColor(event.target.value)
                }}
            >
                <option value="" disabled>Choose a color</option>
                {colors.map(color => (
                    <option
                        value={color}
                        key={color}
                        style={{ color }}
                    >
                        {color}
                    </option>
                ))}

            </select>
        </div>
    )
}
