import { AppSidebar } from '@/components/app-sidebar'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'

export default function Page() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4'>
					<SidebarTrigger className='-ml-1' />
					<Separator
						orientation='vertical'
						className='mr-2 data-[orientation=vertical]:h-4'
					/>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbPage>October 2024</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<div className='flex flex-1 flex-col gap-4 p-4'>
					<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
						<div className='bg-indigo-700/50 text-indigo-700 rounded-xl flex items-center justify-center'>
							<div className='text-2xl font-bold'>To do</div>
						</div>
						<div className='bg-primary/10 text-primary rounded-xl flex items-center justify-center'>
							<div className='text-2xl font-bold'>In progress</div>
						</div>
						<div className='bg-primary/10 rounded-xl flex items-center justify-center text-primary'>
							<div className='text-2xl font-bold'>Done</div>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-col gap-4 p-4'>
					<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
						{Array.from({ length: 20 }).map((_, i) => (
							<div key={i} className='bg-muted/50 aspect-square rounded-xl' />
						))}
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
