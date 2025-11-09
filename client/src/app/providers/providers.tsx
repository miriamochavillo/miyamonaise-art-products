import { JotaiProvider } from './jotai/jotai-provider';
import { ReactRouterDomProvider } from './router/react-router-dom-provider';

export const Providers = () => {
  return (
    <JotaiProvider>
      <ReactRouterDomProvider />
    </JotaiProvider>
  );
};
