import '../App.css'

export interface PageColumnProps {
  children: React.ReactNode;
}

const PageColumn: React.FC<PageColumnProps> = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/3 pt-10 pb-10 text-left leading-8">
          {children}
        </div>
      </div>
    </>
  )
}

export default PageColumn
