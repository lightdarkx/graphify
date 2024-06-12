import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Menu = () => {
  return (
    <>
      <Tabs />
    </>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSetSelected = (val: number | null) => {
    setSelected(val);
  };
  return (
    <>
      <div
        onMouseLeave={() => handleSetSelected(null)}
        className='relative flex h-fit gap-2 border-0'
      >
        {NAVBAR.map((t) => {
          return (
            <Tab
              key={t.id}
              tab={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
            >
              {t.title}
            </Tab>
          );
        })}

        {selected && <Content selected={selected} />}
      </div>
    </>
  );
};

const Tab = ({
  children,
  tab,
  selected,
  handleSetSelected,
}: {
  children: ReactNode;
  tab: number;
  selected: number | null;
  handleSetSelected: (val: number | null) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onMouseEnter={() => {
        handleSetSelected(tab);
        setOpen(true);
      }}
      onClick={() => handleSetSelected(tab)}
      onMouseLeave={() => setOpen(false)}
      className='border-0 relative rounded-full text-sm text-slate-300 hover:text-iris-text hover:bg-slate-700'
    >
      <div className='flex items-center gap-1 px-3 py-1'>
        <span>{children}</span>
        <ChevronDownIcon
          className={`transition-transform ${
            selected === tab ? 'rotate-180' : ''
          }`}
        />
      </div>
      <span
        style={{ transform: open ? 'scaleX(0.5)' : 'scaleX(1)' }}
        className='absolute -bottom-2 left-1 right-3 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out'
      />
    </button>
  );
};

const Content = ({ selected }: { selected: number | null }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className='absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg p-4 border border-sky-300'
    >
      <Bridge />
      <Component1 />
    </motion.div>
  );
};

const Bridge = () => {
  return (
    <div className='border-0 border-red-500 absolute -top-6 left-0 right-0  h-6' />
  );
};

const Component1 = () => {
  return (
    <div className='text-slate-300 border-0'>
      <div>sub-item-1</div>
      <div>sub-item-2</div>
      <div>sub-item-3</div>
      <div>sub-item-4</div>
    </div>
  );
};

const NAVBAR = [
  {
    title: 'item1',
    Component: Component1,
  },
  {
    title: 'item2',
    Component: Component1,
  },
  {
    title: 'item3',
    Component: Component1,
  },
  {
    title: 'item4',
    Component: Component1,
  },
  {
    title: 'Item5',
    Component: Component1,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default Menu;
