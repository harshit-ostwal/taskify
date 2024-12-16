import React from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

function CreateTask() {

  const form = useForm({
    defaultValues: {
      title: "",
      priority: "MEDIUM",
    }
  })

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Icons.plus className="w-5 h-5" /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl md:max-w-2xl rounded-md w-11/12 sm:w-full">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Task Title"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Task Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Link"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Priority</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {["LOW", "MEDIUM", "HIGH", "URGENT"].map((priority) => (
                          <SelectItem key={priority} value={priority}>
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-2 h-2 rounded-full ${priority === "LOW" ? "bg-green-500" :
                                  priority === "MEDIUM" ? "bg-yellow-500" :
                                    priority === "HIGH" ? "bg-orange-500" :
                                      "bg-red-500"
                                  }`}
                              />
                              <span>{priority.charAt(0) + priority.slice(1).toLowerCase()}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button type="button" variant="outline" className="justify-start font-normal text-sm">
                            {field.value ? format(field.value, "PPP") : <>
                              <div className="flex items-center justify-between text-muted-foreground w-full">
                                <span>Pick Any Date</span>
                                <Calendar1 className="w-5 h-5" />
                              </div>
                            </>}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverClose asChild>
                          <span>
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(selectedDate) => {
                                field.onChange(selectedDate);
                              }}
                              disabled={(date) =>
                                date < new Date()
                              }
                            />
                          </span>
                        </PopoverClose>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Button type="submit" variant="outline" className="w-full text-sm">
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTask