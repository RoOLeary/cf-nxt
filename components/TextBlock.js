export default function TextBlock(props) {

    const { heading, content } = props;

    return (
      <>
        <h2>{heading}</h2>
        <p>{content}</p>
      </>
    )
  }