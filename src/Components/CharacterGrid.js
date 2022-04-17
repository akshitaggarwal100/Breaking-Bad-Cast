import '../App.css'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

function CharacterGrid({ isLoading, items }) {
    return isLoading ? <Spinner /> : (
        <section className='cards'>
            {
                items.map((item) => {
                    // below is a react component CharacterItem
                    // and, map will return a list of these components
                    // resulting in a react list
                    // react list needs key prop in every react component
                    return (
                        <div>
                            <CharacterItem key = {item.char_id} item = {item}></CharacterItem>
                        </div>
                    )

                })
            }
        </section>
    )
}

export default CharacterGrid