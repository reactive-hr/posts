interface IWithLoggerProps {
  logger?: (...args: any[]) => void
}

const withLogger = function <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options = { msg: 'Hello from' }
): React.FC<P & IWithLoggerProps> {
  return function ({ ...props }) {
    const logger = (...args: any[]) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(
          options.msg,
          WrappedComponent.name || WrappedComponent.displayName || 'Component?',
          ...args
        )
      }
    }

    return <WrappedComponent logger={logger} {...(props as P)} />
  }
}

export default withLogger
