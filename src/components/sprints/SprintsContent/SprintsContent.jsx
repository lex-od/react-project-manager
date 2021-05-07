// import styles from "./SprintsContent.module.scss"

export default function SprintsContent() {
    return (
        <>
            <div>
                <div></div>
                <span>08.08.2020</span>
                <form>
                    <input type="text"></input>
                    <button type="submit">serch</button>
                </form>
            </div>
            <div>
                <h1>Sprint Burndown Chart 1</h1>
                <button type="submit"></button>
                <p>Заплановано годин</p>
                <p>Витрачено год / день</p>
                <p>Витрачено годин</p>
            </div>
            <div>
                <div>
                    <h2>{/*card name*/}</h2>
                    <div>
                        <span>Заплановано годин</span>
                        <span></span>
                    </div>
                    <div>
                        <span>Витрачено год / день</span>
                        <span></span>
                    </div>
                    <div>
                        <span>Витрачено годин</span>
                        <span></span>
                    </div>
                    <button type="submit">del</button>
                </div>
            </div>
        </>
    );
}
