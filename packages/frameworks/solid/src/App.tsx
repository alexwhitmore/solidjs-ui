import type { Component } from 'solid-js';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownPosition,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./components/ui/dropdown-menu";
import { Slash } from 'lucide-solid';

const BreadcrumbDemo: Component = () => {
  return (
    <div class='ml-20 mt-20'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex items-center gap-1 outline-none">
                <BreadcrumbEllipsis class="w-4 h-4" />
                <span class="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownPosition class="relative">
                <DropdownMenuContent>
                  <DropdownMenuItem id="documentation">Documentation</DropdownMenuItem>
                  <DropdownMenuItem id="themes">Themes</DropdownMenuItem>
                  <DropdownMenuItem id="github">GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownPosition>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbDemo;
