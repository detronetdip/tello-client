import { AiOutlineBorderlessTable } from "react-icons/ai";
import { BsBrightnessHigh, BsEyedropper } from "react-icons/bs";
import { CgFormatSeparator } from "react-icons/cg";
import { IoMdContrast } from "react-icons/io";
import { IoInvertModeOutline } from "react-icons/io5";
import { MdBlurOn } from "react-icons/md";
import { RiScalesFill } from "react-icons/ri";
import { TbRotateRectangle } from "react-icons/tb";
export const editorOptions = [
  {
    option: "Brightness",
    icon: BsBrightnessHigh,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 100,
      end: 200,
    },
  },
  {
    option: "Contrast",
    icon: IoMdContrast,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 100,
      end: 200,
    },
  },
  {
    option: "Blur",
    icon: MdBlurOn,
    unit: "px",
    step: 0.1,
    range: {
      start: 0,
      default: 0,
      end: 100,
    },
  },
  {
    option: "Greyscale",
    icon: RiScalesFill,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 0,
      end: 100,
    },
  },
  {
    option: "Hue",
    icon: TbRotateRectangle,
    unit: "deg",
    step: 1,
    range: {
      start: -100,
      default: 0,
      end: 100,
    },
  },
  {
    option: "Invert",
    icon: IoInvertModeOutline,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 0,
      end: 100,
    },
  },
  {
    option: "Opacity",
    icon: BsEyedropper,
    unit: "%",
    step: 0.1,
    range: {
      start: 0,
      default: 100,
      end: 100,
    },
  },
  {
    option: "Saturation",
    icon: AiOutlineBorderlessTable,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 100,
      end: 200,
    },
  },
  {
    option: "Sepia",
    icon: CgFormatSeparator,
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 0,
      end: 100,
    },
  },
];
