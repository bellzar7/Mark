import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Mark Digital Agency</h1>
          <p className="text-2xl text-gray-400 mb-8">
            Professional Web Development & Digital Solutions
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">
              🚧 Site Under Migration
            </h2>
            <p className="text-gray-300">
              This site is currently being migrated from Create React App to Next.js 15 with TypeScript.
              <br />
              Please refer to <code className="bg-gray-800 px-2 py-1 rounded">MIGRATION_GUIDE.md</code> for details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">✅ Completed</h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• TypeScript setup</li>
                <li>• Next.js 15 App Router</li>
                <li>• Tailwind configuration</li>
                <li>• Server/client architecture</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">⚠️ In Progress</h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• Component conversion</li>
                <li>• CSS to Tailwind migration</li>
                <li>• TypeScript types</li>
                <li>• SEO optimization</li>
              </ul>
            </div>
          </div>

          <div className="space-x-4">
            <Link
              href="/policy"
              className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              Cookie Policy
            </Link>
            <Link
              href="/quiz"
              className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
            >
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
