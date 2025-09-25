export default function Heading(props: { text: string }) {
    return (
        <div className="text-xl  mb-2 font-bold text-gray-800">
            {props.text}
        </div>
        );
}