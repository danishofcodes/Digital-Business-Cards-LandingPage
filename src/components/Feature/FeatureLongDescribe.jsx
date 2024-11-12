import PointerList from "../pointer-list/PointerList";

export default function FeatureLongDescribe({ details}) {
    return (
        <div>
            {
                details.map((detail) => {
                    return (
                        <PointerList title={detail.title} description={detail.description} imgIcon={detail.imgIcon} />
                    )
                })
            }
        </div>
    )
}
