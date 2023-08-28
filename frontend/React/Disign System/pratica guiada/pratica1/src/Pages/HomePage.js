import CardSocial from "../Components/Card"

export function HomePage(props) {

    const { users } = props

    return (
        <div className="Container">
            {
                users?.map((user) => {
                    return (
                        <CardSocial key={user.id}
                            name={user.name} />
                    )
                })
            }

        </div>
    )
}