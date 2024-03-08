<template>
    <div class="container">
        <!-- Categories -->
        <h6 class="mt-10 text-lg font-bold">Categories</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in categories" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.nameTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.nameRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.nameEn }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteCategory(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postCategory.nameTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postCategory.nameRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postCategory.nameEn" />
                </div>
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addCategory"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- SubCategories -->
        <h6 class="mt-10 text-lg font-bold">Subcategories</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in subcategories" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.nameTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.nameRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.nameEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.categoryId }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteSubcategory(item.id)"
                                class="font-medium cursor-pointer text-red-600 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postSubcategory.nameTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postSubcategory.nameRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postSubcategory.nameEn" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Category Id</label>
                <select v-model="postSubcategory.categoryId"
                    class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                    <option v-for="item in categories" :value="item.id">{{ item.nameTm }}</option>
                </select>
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addSubcategory"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Poems -->
        <h6 class="mt-10 text-lg font-bold">Poems</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subcategory Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in poems" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.subcategoryId }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deletePoem(item.id)"
                                class="font-medium cursor-pointer text-red-600 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postPoem.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postPoem.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postPoem.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Goshgy Tm</label>
                <textarea v-model="postPoem.descTm" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Goshgy Ru</label>
                <textarea v-model="postPoem.descRu" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Goshgy En</label>
                <textarea v-model="postPoem.descEn" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Subcategory Id</label>
                <select v-model="postPoem.subcategoryId"
                    class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                    <option v-for="item in subcategories" :value="item.id">{{ item.nameTm }}</option>
                </select>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="img" type="file">
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload sound</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="sound" type="file">
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addPoem"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Books -->
        <h6 class="mt-10 text-lg font-bold">Books</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Awtor
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in books" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.awtor }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteBook(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postBook.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postBook.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postBook.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Tm</label>
                <textarea v-model="postBook.descTm" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Ru</label>
                <textarea v-model="postBook.descRu" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc En</label>
                <textarea v-model="postBook.descEn" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Awtor</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postBook.awtor" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="book-img" type="file">
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload pdf</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="book-pdf" type="file">
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addBook"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Literatis -->
        <h6 class="mt-10 text-lg font-bold">Literatis</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Year
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in literatis" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.year }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteLiteratis(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postLiteratis.name" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Year</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postLiteratis.year" placeholder="1721-1778" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="literate-img" type="file">
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Tm</label>
                <textarea v-model="postLiteratis.descTm" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Ru</label>
                <textarea v-model="postLiteratis.descRu" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc En</label>
                <textarea v-model="postLiteratis.descEn" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addLiteratis"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Museums -->
        <h6 class="mt-10 text-lg font-bold">Museums</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in museums" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.location }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteMuseum(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postMuseum.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postMuseum.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postMuseum.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Tm</label>
                <textarea v-model="postMuseum.descTm" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Ru</label>
                <textarea v-model="postMuseum.descRu" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc En</label>
                <textarea v-model="postMuseum.descEn" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Location</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postMuseum.location" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="museum-img" type="file">
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addMuseum"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Museum Images -->
        <h6 class="mt-10 text-lg font-bold">Museum images</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Museum Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in museum_images" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.img }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.museumId }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteMuseumImage(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="museum-image" type="file">
            </div>
            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Museum Id</label>
                <select v-model="postMuseumImage.museumId"
                    class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                    <option v-for="item in museums" :value="item.id">{{ item.titleTm }}</option>
                </select>
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addMuseumImage"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Statues -->
        <h6 class="mt-10 text-lg font-bold">Statues</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            location
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in statues" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.location }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteStatue(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postStatues.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postStatues.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postStatues.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Location</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postStatues.location" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="statue-img" type="file">
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addStatues"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Films -->
        <h6 class="mt-10 text-lg font-bold">Films</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Awtor
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in films" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.awtor }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.time }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteFilm(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postFilms.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postFilms.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postFilms.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Awtor</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postFilms.awtor" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Time</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postFilms.time" placeholder="01:20" />
                </div>
            </div>
            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload video</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="film" type="file">
            </div>
        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addFilms"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        <!-- Conferences -->
        <h6 class="mt-10 text-lg font-bold">Conferences</h6>
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Desc Tm
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Desc Ru
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Desc En
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in conferences" :key="item.id" class="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.titleTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.titleEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.descTm }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.descRu }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.descEn }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.location }}
                        </td>
                        <td class="px-6 py-4">
                            <a @click="deleteConference(item.id)"
                                class="font-medium text-red-600 cursor-pointer hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 flex">
            <div class="sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name Tm</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postConferences.titleTm" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name Ru</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postConferences.titleRu" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Name En</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postConferences.titleEn" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Tm</label>
                <textarea v-model="postConferences.descTm" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc Ru</label>
                <textarea v-model="postConferences.descRu" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900">Desc En</label>
                <textarea v-model="postConferences.descEn" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            
            <div class="sm:col-span-2">
                <label class="block text-sm font-medium leading-6 text-gray-900">Location</label>
                <div class="mt-2">
                    <input type="text"
                        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        v-model="postConferences.location" />
                </div>
            </div>

            <div class="sm:col-span-2">
                <label class="block mb-1 text-sm font-medium text-gray-900">Upload img</label>
                <input
                    class="block w-full text-sm text-gray-900 p-1 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="conference" type="file">
            </div>

        </div>
        <div class="mt-2 flex me-auto justify-end items-end mt-5">
            <button @click="addConferences"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: null,
            subcategories: null,
            poems: null,
            books: null,
            literatis: null,
            museums: null,
            museum_images: null,
            statues: null,
            films: null,
            conferences: null,
            postCategory: {
                nameTm: null,
                nameRu: null,
                nameEn: null
            },
            postSubcategory: {
                nameTm: null,
                nameRu: null,
                nameEn: null,
                categoryId: 0
            },
            postPoem: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                descTm: null,
                descRu: null,
                descEn: null,
                subcategoryId: 0
            },
            postBook: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                descTm: null,
                descRu: null,
                descEn: null,
                awtor: null
            },
            postLiteratis: {
                name: null,
                year: null,
                descTm: null,
                descRu: null,
                descEn: null
            },
            postMuseum: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                descTm: null,
                descRu: null,
                descEn: null,
                location: null
            },
            postMuseumImage: {
                museumId: 0
            },
            postStatues: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                location: null
            },
            postFilms: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                awtor: null,
                time: null
            },
            postConferences: {
                titleTm: null,
                titleRu: null,
                titleEn: null,
                descTm: null,
                descRu: null,
                descEn: null,
                location: null
            }
        }
    },
    async created() {
        await this.getAllCategories()
        await this.getAllSubcategories()
        await this.getAllPoems()
        await this.getAllBooks()
        await this.getAllLiteratis()
        await this.getAllMuseums(),
        await this.getAllMuseumImages(),
        await this.getAllStatues(),
        await this.getAllFilms(),
        await this.getAllConferences()
    },
    methods: {
        async getAllCategories() {
            try {
                const res = await this.$appAxios.get('/category?limit=100')
                this.categories = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllSubcategories() {
            try {
                const res = await this.$appAxios.get('/subcategory?limit=100')
                this.subcategories = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllPoems() {
            try {
                const res = await this.$appAxios.get('/all/poems?limit=100')
                this.poems = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllBooks() {
            try {
                const res = await this.$appAxios.get('/books?limit=100')
                this.books = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllLiteratis() {
            try {
                const res = await this.$appAxios.get('/literatis?limit=100')
                this.literatis = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllMuseums() {
            try {
                const res = await this.$appAxios.get('/museums?limit=100')
                this.museums = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllMuseumImages() {
            try {
                const res = await this.$appAxios.get('/museum/images?limit=100')
                this.museum_images = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllStatues() {
            try {
                const res = await this.$appAxios.get('/statues?limit=100')
                this.statues = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllFilms() {
            try {
                const res = await this.$appAxios.get('/films?limit=100')
                this.films = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        async getAllConferences() {
            try {
                const res = await this.$appAxios.get('/conferences?limit=100')
                this.conferences = await res.data.detail.rows
            } catch (error) {
                console.log(error)
            }
        },
        // POST
        async addCategory() {
            try {
                const data = {
                    nameTm: this.postCategory.nameTm,
                    nameRu: this.postCategory.nameRu,
                    nameEn: this.postCategory.nameRu
                }
                await this.$appAxios.post('/add/category', data)
                await this.getAllCategories()
            } catch (error) {
                console.log(error)
            }
        },
        async addSubcategory() {
            try {
                const data = {
                    nameTm: this.postSubcategory.nameTm,
                    nameRu: this.postSubcategory.nameRu,
                    nameEn: this.postSubcategory.nameRu,
                    categoryId: this.postSubcategory.categoryId
                }
                await this.$appAxios.post('/add/subcategory', data)
                await this.getAllSubcategories()
            } catch (error) {
                console.log(error)
            }
        },
        async addPoem() {
            try {
                const fileInputImg = document.getElementById("img")
                const fileInputSound = document.getElementById("sound")
                const fileImg = fileInputImg.files[0]
                const fileSound = fileInputSound.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                if (fileSound?.name) { formData.append("sound", fileSound, fileSound.name) }
                formData.append("titleTm", this.postPoem.titleTm)
                formData.append("titleRu", this.postPoem.titleRu)
                formData.append("titleEn", this.postPoem.titleEn)
                formData.append("descTm", this.postPoem.descTm)
                formData.append("descRu", this.postPoem.descRu)
                formData.append("descEn", this.postPoem.descEn)
                formData.append("subcategoryId", this.postPoem.subcategoryId)
                await this.$appAxios.post('/add/poem', formData)
                await this.getAllPoems()
            } catch (error) {
                console.log(error)
            }
        },
        async addBook() {
            try {
                const fileInputImg = document.getElementById("book-img")
                const fileInputBook = document.getElementById("book-pdf")
                const fileImg = fileInputImg.files[0]
                const fileBook = fileInputBook.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                if (fileBook?.name) { formData.append("pdf", fileBook, fileBook.name) }
                formData.append("titleTm", this.postBook.titleTm)
                formData.append("titleRu", this.postBook.titleRu)
                formData.append("titleEn", this.postBook.titleEn)
                formData.append("descTm", this.postBook.descTm)
                formData.append("descRu", this.postBook.descRu)
                formData.append("descEn", this.postBook.descEn)
                formData.append("awtor", this.postBook.awtor)
                await this.$appAxios.post('/add/book', formData)
                await this.getAllBooks()
            } catch (error) {
                console.log(error)
            }
        },
        async addLiteratis() {
            try {
                const fileInputImg = document.getElementById("literate-img")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                formData.append("name", this.postLiteratis.name)
                formData.append("year", this.postLiteratis.year)
                formData.append("descTm", this.postLiteratis.descTm)
                formData.append("descRu", this.postLiteratis.descRu)
                formData.append("descEn", this.postLiteratis.descEn)
                await this.$appAxios.post('/add/literatis', formData)
                await this.getAllLiteratis()
            } catch (error) {
                console.log(error)
            }
        },
        async addMuseum() {
            try {
                const fileInputImg = document.getElementById("museum-img")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                formData.append("titleTm", this.postMuseum.titleTm)
                formData.append("titleRu", this.postMuseum.titleRu)
                formData.append("titleEn", this.postMuseum.titleEn)
                formData.append("descTm", this.postMuseum.descTm)
                formData.append("descRu", this.postMuseum.descRu)
                formData.append("descEn", this.postMuseum.descEn)
                formData.append("location", this.postMuseum.location)
                await this.$appAxios.post('/add/museums', formData)
                await this.getAllMuseums()
            } catch (error) {
                console.log(error)
            }
        },
        async addMuseumImage() {
            try {
                const fileInputImg = document.getElementById("museum-image")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                formData.append("museumId", this.postMuseumImage.museumId)
                await this.$appAxios.post('/add/museum/image', formData)
                await this.getAllMuseumImages()
            } catch (error) {
                console.log(error)
            }
        },
        async addStatues() {
            try {
                const fileInputImg = document.getElementById("statue-img")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                formData.append("titleTm", this.postStatues.titleTm)
                formData.append("titleRu", this.postStatues.titleRu)
                formData.append("titleEn", this.postStatues.titleEn)
                formData.append("location", this.postStatues.location)
                await this.$appAxios.post('/add/statues', formData)
                await this.getAllStatues()
            } catch (error) {
                console.log(error)
            }
        },
        async addFilms() {
            try {
                const fileInputImg = document.getElementById("film")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("video", fileImg, fileImg.name) }
                formData.append("titleTm", this.postFilms.titleTm)
                formData.append("titleRu", this.postFilms.titleRu)
                formData.append("titleEn", this.postFilms.titleEn)
                formData.append("awtor", this.postFilms.awtor)
                formData.append("time", this.postFilms.time)
                await this.$appAxios.post('/add/film', formData)
                await this.getAllFilms()
            } catch (error) {
                console.log(error)
            }
        },
        async addConferences() {
            try {
                const fileInputImg = document.getElementById("conference")
                const fileImg = fileInputImg.files[0]
                const formData = new FormData()
                if (fileImg?.name) { formData.append("img", fileImg, fileImg.name) }
                formData.append("titleTm", this.postConferences.titleTm)
                formData.append("titleRu", this.postConferences.titleRu)
                formData.append("titleEn", this.postConferences.titleEn)
                formData.append("descTm", this.postConferences.descTm)
                formData.append("descRu", this.postConferences.descRu)
                formData.append("descEn", this.postConferences.descEn)
                formData.append("location", this.postConferences.awtor)
                await this.$appAxios.post('/add/conferences', formData)
                await this.getAllConferences()
            } catch (error) {
                console.log(error)
            }
        },
        // DELETE
        async deleteCategory(id) {
            try {
                await this.$appAxios.delete(`/delete/category/${id}`)
                await this.getAllCategories()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteSubcategory(id) {
            try {
                await this.$appAxios.delete(`/delete/subcategory/${id}`)
                await this.getAllSubcategories()
            } catch (error) {
                console.log(error)
            }
        },
        async deletePoem(id) {
            try {
                await this.$appAxios.delete(`/delete/poem/${id}`)
                await this.getAllPoems()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteBook(id) {
            try {
                await this.$appAxios.delete(`/delete/book/${id}`)
                await this.getAllBooks()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteLiteratis(id) {
            try {
                await this.$appAxios.delete(`/delete/literatis/${id}`)
                await this.getAllLiteratis()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteMuseum(id) {
            try {
                await this.$appAxios.delete(`/delete/museum/${id}`)
                await this.getAllMuseums()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteMuseumImage(id) {
            try {
                await this.$appAxios.delete(`/delete/museum/image/${id}`)
                await this.getAllMuseumImages()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteStatue(id) {
            try {
                await this.$appAxios.delete(`/delete/statue/${id}`)
                await this.getAllStatues()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteFilm(id) {
            try {
                await this.$appAxios.delete(`/delete/film/${id}`)
                await this.getAllFilms()
            } catch (error) {
                console.log(error)
            }
        },
        async deleteConference(id) {
            try {
                await this.$appAxios.delete(`/delete/conference/${id}`)
                await this.getAllConferences()
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>