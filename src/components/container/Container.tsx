interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="px-2 font-roboto border-2 border-text-orange border-t-0">
      <div className="py-12.5 flex flex-col justify-evenly text-text-orange">
        {children}
      </div>
    </section>
  );
};

export default Container;
