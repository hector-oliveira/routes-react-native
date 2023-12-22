// criar um hook que alterna o estado

import { useState } from "react";
/**
 * 
 * @param initialValue 
 * @returns value with initial value and toggleValue function to change value
 */
export const useToggle = (initialValue: boolean) => {
	const [value, setValue] = useState(initialValue);

	const toggleValue = () => setValue(!value);

	return {value, toggleValue};
}