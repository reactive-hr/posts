function withLogger(
  WrappedComponent: React.ComponentType<{ logger: () => void }>,
  options = { msg: 'Hello from' }
) {
  return function ({ ...props }) {
    const logger = (...args: any[]) => {
      console.log(
        options.msg,
        WrappedComponent.name || WrappedComponent.displayName || 'Component?',
        ...args
      )
    }

    return (
      <div>
        <WrappedComponent logger={logger} {...props} />
      </div>
    )
  }
}

export default withLogger
