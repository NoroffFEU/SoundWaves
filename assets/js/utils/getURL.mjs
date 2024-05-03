export function getURL(parameterName) {
  const urlParams = new URLSearchParams(window.location.search);
  const parameterValue = urlParams.get(parameterName);
  return parameterValue;
}