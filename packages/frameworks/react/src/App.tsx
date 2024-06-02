import Example from './examples/avatar.example'
import { TreeView } from '@ark-ui/react'
import { ChevronDown } from 'lucide-react'

function App() {
  // return <Example />
  return (
    <div className="w-[250px] border">
      <TreeView.Root>
        <TreeView.Label className="px-2 py-1.5 text-sm font-semibold">Introduction</TreeView.Label>
        <TreeView.Tree>
          <TreeView.Branch id="2.0" className="my-1">
            <TreeView.BranchControl className="flex items-center gap-4 mx-2 rounded y-2 hover:bg-secondary">
              <TreeView.BranchIndicator>
                <ChevronDown className="w-4 h-4" />
              </TreeView.BranchIndicator>
              <TreeView.BranchText className="py-1">2.0</TreeView.BranchText>
            </TreeView.BranchControl>
            <TreeView.BranchContent className="px-1">
              <TreeView.Item
                id="2.1"
                className="pl-3 before:border-l y-2 hover:bg-secondary px-2 py-1.5 rounded"
              >
                <TreeView.ItemText className="pl-6 text-sm font-semibold">2.2</TreeView.ItemText>
              </TreeView.Item>
              <TreeView.Item
                id="2.1"
                className="pl-3 before:border-l y-2 hover:bg-secondary px-2 py-1.5 rounded"
              >
                <TreeView.ItemText className="pl-6 text-sm font-semibold">2.2</TreeView.ItemText>
              </TreeView.Item>
            </TreeView.BranchContent>
          </TreeView.Branch>
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  )
}

export default App
