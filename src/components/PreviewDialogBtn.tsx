import { MdPreview } from 'react-icons/md'

import { Button } from '@/components/ui/button'

function PreviewDialogBtn() {
  return (
    <Button variant={'outline'} className="gap-2">
      <MdPreview className="h-6 w-6" />
      Preview
    </Button>
  )
}

export default PreviewDialogBtn
