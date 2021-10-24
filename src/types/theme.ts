export interface Theme {
  mainBackground: string;
  complementaryBackground: string;
  text: string;
  primary: Variant;
  secondary: Variant;
  success: Variant;
  warning: Variant;
  danger: Variant;
  info: Variant;
}

type Variant = {
  background: string;
  text: string;
};
