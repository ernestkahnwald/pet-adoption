export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export function withDisplayName(component, name) {
  component.displayName = name ? name : getDisplayName(component);
  return component;
}
