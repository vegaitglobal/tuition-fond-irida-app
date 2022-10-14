import { Colors, colors } from "./colors";
import { DeviceSize, breakpoints } from "./breakpoints";

interface Theme {
    colors: Colors;
    breakpoints: DeviceSize;
}

export const theme: Theme = {
    colors,
    breakpoints,
};
