<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles1 = Role::create([
            "name" => "Customer",
            "description" => "A user with Customers privilege"
        ]);
        $roles1->save();

        $roles2 = Role::create([
            "name" => "Vendor",
            "description" => "A user with Vendors privilege"
        ]);
        $roles2->save();

        $roles3 = Role::create([
            "name" => "Super_Admin",
            "description" => "A user with Super Admin privilege"
        ]);
        $roles3->save();
    }
}
