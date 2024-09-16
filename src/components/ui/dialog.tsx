import * as DialogPrimitive from '@radix-ui/react-dialog'

export function Dialog(props:DialogPrimitive.DialogProps){
    return<DialogPrimitive.Dialog {...props}/>
}


export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
    return <DialogPrimitive.DialogTrigger {...props} />
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
    return <DialogPrimitive.DialogClose {...props} />
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
    return <DialogPrimitive.DialogPortal {...props} />
}


export  function DialogOverlay(props: DialogPrimitive.DialogOverlayProps){
    return(
        <DialogPrimitive.DialogOverlay {...props} 
            className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm '
        >

        </DialogPrimitive.DialogOverlay>
    )
}

export function DialogContent(props: DialogPrimitive.DialogContentProps){
    return(
        <DialogPortal>
            <DialogOverlay>
                <DialogPrimitive.DialogContent
                    {...props}
                    className='fixed z-50 bg-[#f3f3f3] w-[250px]  left-0 top-0 bottom-0  h-screen border-r border-black/10 px-2 py-4 '
                
                />
            </DialogOverlay>
        </DialogPortal>
    )
}

export function DialogTitle(props:DialogPrimitive.DialogTitleProps){
    return(
        <DialogPrimitive.DialogTitle {...props} className='font-normal  '/>
    )
}



export function DialogDescription(
    props: DialogPrimitive.DialogDescriptionProps
  ) {
    return (
      <DialogPrimitive.DialogDescription
        {...props}
      />
    )
  }