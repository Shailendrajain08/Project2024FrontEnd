export interface ITabRendererProps {
  active: boolean;
  activeTab: number;
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void;
}
