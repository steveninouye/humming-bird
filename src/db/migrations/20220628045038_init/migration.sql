-- CreateEnum
CREATE TYPE "RatingSystemType" AS ENUM ('CLIENT', 'CLIENT_GUEST', 'CO_OP_VENDOR', 'GOOGLE', 'KNOT', 'YELP');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressId" TEXT;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "addressId" TEXT,
    "name" TEXT,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "websiteUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "endTime" TIMESTAMP(3),
    "eventOwnerId" TEXT,
    "eventTypeId" INTEGER,
    "startTime" TIMESTAMP(3),
    "venueServiceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventAttendee" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventAttendee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenueServiceEventType" (
    "id" TEXT NOT NULL,
    "eventTypeId" INTEGER,
    "venueServiceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VenueServiceEventType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenueService" (
    "id" SERIAL NOT NULL,
    "addressId" TEXT,
    "advertisedCostInCents" INTEGER,
    "businessId" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VenueService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessRating" (
    "id" TEXT NOT NULL,
    "businessId" TEXT,
    "rating" INTEGER,
    "ratingSystemId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BusinessRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenueServiceRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER,
    "ratingSystemId" INTEGER,
    "venueServiceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VenueServiceRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotographyServiceRating" (
    "id" TEXT NOT NULL,
    "photographyServiceId" TEXT,
    "rating" INTEGER,
    "ratingSystemId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotographyServiceRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RatingSystem" (
    "id" SERIAL NOT NULL,
    "type" "RatingSystemType" NOT NULL,
    "topRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RatingSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotographyService" (
    "id" TEXT NOT NULL,
    "advertisedCostInCents" INTEGER,
    "businessId" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotographyService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventPhotographyService" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "photographyServiceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventPhotographyService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventVenueService" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "venueServiceId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventVenueService_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Business_addressId_idx" ON "Business"("addressId");

-- CreateIndex
CREATE INDEX "Event_eventOwnerId_idx" ON "Event"("eventOwnerId");

-- CreateIndex
CREATE INDEX "Event_venueServiceId_idx" ON "Event"("venueServiceId");

-- CreateIndex
CREATE INDEX "Event_eventTypeId_idx" ON "Event"("eventTypeId");

-- CreateIndex
CREATE INDEX "EventAttendee_eventId_idx" ON "EventAttendee"("eventId");

-- CreateIndex
CREATE INDEX "EventAttendee_userId_idx" ON "EventAttendee"("userId");

-- CreateIndex
CREATE INDEX "VenueServiceEventType_eventTypeId_idx" ON "VenueServiceEventType"("eventTypeId");

-- CreateIndex
CREATE INDEX "VenueServiceEventType_venueServiceId_idx" ON "VenueServiceEventType"("venueServiceId");

-- CreateIndex
CREATE INDEX "BusinessRating_businessId_idx" ON "BusinessRating"("businessId");

-- CreateIndex
CREATE INDEX "BusinessRating_ratingSystemId_idx" ON "BusinessRating"("ratingSystemId");

-- CreateIndex
CREATE INDEX "VenueServiceRating_venueServiceId_idx" ON "VenueServiceRating"("venueServiceId");

-- CreateIndex
CREATE INDEX "VenueServiceRating_ratingSystemId_idx" ON "VenueServiceRating"("ratingSystemId");

-- CreateIndex
CREATE INDEX "PhotographyServiceRating_photographyServiceId_idx" ON "PhotographyServiceRating"("photographyServiceId");

-- CreateIndex
CREATE INDEX "PhotographyServiceRating_ratingSystemId_idx" ON "PhotographyServiceRating"("ratingSystemId");

-- CreateIndex
CREATE INDEX "PhotographyService_businessId_idx" ON "PhotographyService"("businessId");

-- CreateIndex
CREATE INDEX "EventPhotographyService_eventId_idx" ON "EventPhotographyService"("eventId");

-- CreateIndex
CREATE INDEX "EventPhotographyService_photographyServiceId_idx" ON "EventPhotographyService"("photographyServiceId");

-- CreateIndex
CREATE INDEX "EventVenueService_eventId_idx" ON "EventVenueService"("eventId");

-- CreateIndex
CREATE INDEX "EventVenueService_venueServiceId_idx" ON "EventVenueService"("venueServiceId");

-- CreateIndex
CREATE INDEX "User_addressId_idx" ON "User"("addressId");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventOwnerId_fkey" FOREIGN KEY ("eventOwnerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_venueServiceId_fkey" FOREIGN KEY ("venueServiceId") REFERENCES "VenueService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAttendee" ADD CONSTRAINT "EventAttendee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAttendee" ADD CONSTRAINT "EventAttendee_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenueServiceEventType" ADD CONSTRAINT "VenueServiceEventType_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenueServiceEventType" ADD CONSTRAINT "VenueServiceEventType_venueServiceId_fkey" FOREIGN KEY ("venueServiceId") REFERENCES "VenueService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessRating" ADD CONSTRAINT "BusinessRating_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessRating" ADD CONSTRAINT "BusinessRating_ratingSystemId_fkey" FOREIGN KEY ("ratingSystemId") REFERENCES "RatingSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenueServiceRating" ADD CONSTRAINT "VenueServiceRating_venueServiceId_fkey" FOREIGN KEY ("venueServiceId") REFERENCES "VenueService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VenueServiceRating" ADD CONSTRAINT "VenueServiceRating_ratingSystemId_fkey" FOREIGN KEY ("ratingSystemId") REFERENCES "RatingSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotographyServiceRating" ADD CONSTRAINT "PhotographyServiceRating_ratingSystemId_fkey" FOREIGN KEY ("ratingSystemId") REFERENCES "RatingSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotographyServiceRating" ADD CONSTRAINT "PhotographyServiceRating_photographyServiceId_fkey" FOREIGN KEY ("photographyServiceId") REFERENCES "PhotographyService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotographyService" ADD CONSTRAINT "PhotographyService_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPhotographyService" ADD CONSTRAINT "EventPhotographyService_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPhotographyService" ADD CONSTRAINT "EventPhotographyService_photographyServiceId_fkey" FOREIGN KEY ("photographyServiceId") REFERENCES "PhotographyService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventVenueService" ADD CONSTRAINT "EventVenueService_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventVenueService" ADD CONSTRAINT "EventVenueService_venueServiceId_fkey" FOREIGN KEY ("venueServiceId") REFERENCES "VenueService"("id") ON DELETE SET NULL ON UPDATE CASCADE;
