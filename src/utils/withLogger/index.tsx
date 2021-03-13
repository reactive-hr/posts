const withLogger = function (
  WrappedComponent: React.ComponentType<{ logger: () => void }>,
  options = { msg: 'Hello from' }
) {
  return function ({ ...props }) {
    const logger = () => {
      console.log(options.msg, WrappedComponent.displayName || WrappedComponent.name)
    }

    return (
      <div>
        <WrappedComponent logger={logger} {...props} />
      </div>
    )
  }
}

export default withLogger
