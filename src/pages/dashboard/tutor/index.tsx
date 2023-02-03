export default function Tutor() {
  return (
    <div>
      <p>tutor</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
      userTypes: ["tutor"],
    },
  };
}
