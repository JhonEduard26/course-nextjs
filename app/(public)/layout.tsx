export default function PublicLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col items-center p-24">
      <span>Hola mundo</span>
      {children}
    </main>
  )
}
