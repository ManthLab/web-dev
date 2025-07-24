import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>Your recent registered Companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src='http://' alt='company logo' />
                    </Avatar>
                </TableCell>   
            </TableBody>
        </Table>
    </div>
  )
}

export default CompaniesTable;