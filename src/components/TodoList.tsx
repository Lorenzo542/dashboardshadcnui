import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const TodoList = () => {
	return (
		<div>
			<ScrollArea className="h-[400px] mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
					<Card className="p-4">
						<div className="flex items-center gap-4">
							<Checkbox id="item1" />
							<label htmlFor="item1" className="text-sm text-muted-foreground">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
								illo
							</label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
