package com.sparkChallenge.sparkSql

import org.apache.log4j.{Level, Logger}
import org.apache.spark
import org.apache.spark.sql.functions.{col, lit}
import org.apache.spark.sql.{Column, SparkSession}
import org.apache.spark.sql.functions._

object TopGamesJoiner {


  def main(args: Array[String]) {
    Logger.getLogger("org").setLevel(Level.ERROR)
    val session = SparkSession.builder().appName("TopGamesSurvey").master("local[*]").getOrCreate()
    val dataFrameReader = session.read

    val responses = dataFrameReader
      .format("csv")
      .option("header", "true")
      .option("inferSchema", value = true)
      .load("data/in/result.csv") // load() returns a DataFrame

    import session.implicits._ // T()  return typedDataset

    val typedDataset = responses.as[Responses]

    System.out.println("=== Print out schema ===")
    typedDataset.printSchema()

    //Transform to operate on multiple columns
    // SONY
    System.out.println("=== The 10 best games for each console/company. of SONY ===")
     typedDataset.withColumn("company", when(col("console").isin("VITA","PSP","PS","PS2","PS3","PS4"), "SONY")
        .otherwise(null))
        .groupBy("company", "console")
        .max("metascore")
        .filter("company is not null" )
        .show(10)
    // MICROSOFT
    System.out.println("=== The 10 best games for each console/company. of MICROSOFT ===")
    typedDataset.withColumn("company", when(col("console").isin("X360","XBOX","XONE"), "MICROSOFT")
      .otherwise(null))
      .groupBy("company", "console")
      .max("metascore")
      .filter("company is not null" )
      .show(10)

      //NINTENDO
    System.out.println("=== The 10 best games for each console/company. of NINTENDO ===")
    typedDataset.withColumn("company", when(col("console").isin("3DS","DS","GBA","Switch","WII","WIIU","GC","N64"), "NINTENDO")
      .otherwise(null))
      .groupBy("company", "console")
      .max("metascore")
      .filter("company is not null" )
      .show(10)

    //SEGA
    System.out.println("=== The 10 best games for each console/company. of SEGA ===")
    typedDataset.withColumn("company", when(col("console").isin("DC"), "SEGA")
      .otherwise(null))
      .groupBy("company", "console")
      .max("metascore")
      .filter("company is not null" )
      .show(10)

    //PC
    System.out.println("=== The 10 best games for each console/company. of PC ===")
    typedDataset.withColumn("company", when(col("console").isin("PC"), "PC")
      .otherwise(null))
      .groupBy("company", "console")
      .max("metascore")
      .filter("company is not null" )
      .show(10)


    //session.stop()
  }


}