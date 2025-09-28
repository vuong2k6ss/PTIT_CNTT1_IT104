type ErrorBannerProps = {
  message: string
}

const ErrorBanner = ({ message }: ErrorBannerProps) => (
  <div className="student-manager__error">{message}</div>
)

export default ErrorBanner
