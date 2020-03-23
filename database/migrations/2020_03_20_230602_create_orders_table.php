<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('rangkap');
            $table->string('tinta');
            $table->string('jenis_kertas');
            $table->string('jilid');
            $table->boolean('jasa_antar');
            $table->string('file');
            $table->time('takenTime');
            $table->text('notes');
            $table->boolean('agreement');
            $table->integer('vendor_id')->unsigned()->index();
            $table->integer('customer_id')->unsigned()->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
