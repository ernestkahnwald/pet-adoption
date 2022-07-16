type ComponentType = any;

export function getDisplayName(component: ComponentType): string {
  return component.displayName || component.name || 'Component';
}

export function withDisplayName(component: ComponentType, name: string | undefined = undefined): ComponentType {
  component.displayName = name ? name : getDisplayName(component);
  return component;
}
