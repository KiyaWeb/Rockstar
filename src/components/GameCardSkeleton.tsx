import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height='250px'/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}
