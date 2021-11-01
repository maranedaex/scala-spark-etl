package com.sparkChallenge.sparkSql

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions.{col, when}

object TopGamesSurvey {


  def main(args: Array[String]) {
    Logger.getLogger("org").setLevel(Level.ERROR)
    val session = SparkSession.builder().appName("TopGamesSurvey").master("local[*]").getOrCreate()
    val dataFrameReader = session.read    // readstream() returns type DataStreamReader

    val responses = dataFrameReader
      .format("csv")
      .option("header", "true")
      .option("inferSchema", value = true)
      .load("data/in/result.csv")       // load() returns a DataFrame

    val responseWithSelectedColumns = responses.select("metascore", "console", "name",  "userscore")


    System.out.println("=== The top 10 best games for all consoles.===")
    responseWithSelectedColumns.orderBy(responseWithSelectedColumns.col("metascore").cast("integer").desc).show(10)

    System.out.println("=== The worst 10 games for all consoles ===")
    responseWithSelectedColumns.orderBy(responseWithSelectedColumns.col("metascore").cast("integer").asc).show(10)

    //session.stop()
  }
}
