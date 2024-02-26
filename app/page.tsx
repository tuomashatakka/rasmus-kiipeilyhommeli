import Card from './components/Card'
import { AlertButton } from './components/Button'


export default function Home () {
  return (
    <main className="">
      <div className="flex flex-row flex-wrap sm:mx-4 mx-12 lg:mx-64 mb-4 items-center justify-around">

        <div className="flex-1 m-4 h-auto">
          <div className='-mt-8 mb-16 w-full'>
            <Card title='Moro'>
              <p className="text-gray-700 text-base">
                Laatikko
              </p>
              <AlertButton>
                Painike
              </AlertButton>
            </Card>
          </div>
        </div>

        <div className="flex-1 m-4 h-auto">
          <div className='-mt-8 mb-16 w-full'>
            <Card title='Osta poro'>
              <p className='text-gray-500 text-large'>uwu</p>
              <AlertButton>
                xoxo
              </AlertButton>
            </Card>
          </div>
        </div>
      </div>

    </main>
  )
}
