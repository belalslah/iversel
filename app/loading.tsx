export default function Loading() {
  return (
    <div className="min-h-screen bg-background-secondary flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
        <p className="mt-4 text-text-secondary">Loading...</p>
      </div>
    </div>
  )
}
