import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table"
import { FC } from 'react'

const Insight: FC = () => {
   const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
      },
    ]
  return (
    <section className='phone:-mt-[13vh] lg:-mt-[7vw] keypad:absolute phone:relative'>
      {/* <div className='justify-center items-center flex'>
         <img src='/images/dashboard.jpeg' alt='' className='rounded-xl phone:w-[95%] lg:w-[75%] object-cover z-20'/>
      </div> */}
      <div className='justify-center items-center flex'>
      <Table>
         <TableCaption>A list of your recent invoices.</TableCaption>
         <TableHeader>
         <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
         </TableRow>
         </TableHeader>
         <TableBody>
         {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
               <TableCell className="font-medium">{invoice.invoice}</TableCell>
               <TableCell>{invoice.paymentStatus}</TableCell>
               <TableCell>{invoice.paymentMethod}</TableCell>
               <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
         ))}
         </TableBody>
      </Table>
      </div>
      <div className='badge phone:w-[50%] lg:w-[12%] mx-auto flex justify-center phone:mt-[7vh] lg:mt-[5vw]'>
         <img src='/icons/star.svg' alt='' className='my-auto w-5 h-5'/>
         <p className='font-medium text-sm text-neutral-800'>Crystal Glimpse</p>
      </div>
      <div className='w-full mx-auto flex flex-col phone:gap-3 lg:gap-7'>
         <h1 className='font-semibold phone:text-2xl lg:text-4xl text-center phone:w-[90%] lg:w-[50%] mx-auto tracking-tighter z-20'>Identifying, assessing and managing risk while striving to attain objectives</h1>
         <h1 className='text-center phone:text-sm lg:text-base tracking-tight text-neutral-500 font-medium phone:w-[90%] lg:w-[70%] mx-auto z-20 phone:mt-2 lg:mt-0'>Elevate your trading experience with our comprehensive risk management tools. From identifying potential pitfalls to assessing their impact and implementing strategic safeguards, we help you stay focused on achieving your objectives while safeguarding your investments.</h1>
      </div>
         <img src='/assets/integration.webp' alt='' className='phone:-mt-8 lg:-mt-36 phone:w-full lg:w-[70%] mx-auto rounded-xl z-10'/>
    </section>
  )
}

export default Insight
