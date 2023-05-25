const fs = require("fs");
const Pendidikan = require("../models/pendidikan");
const Jabatan = require("../models/jabatan");
const Pangkat = require("../models/pangkat");
const ArsipSkp = require("../models/arsipSkp");
const Kgb = require("../models/kgb");
const Lhkasn = require("../models/lhkasn");
const DokumenPenting = require("../models/dokumenPenting");

// dokumen penting
const { fields } = require("./fields/dokumenPenting");
const Absen = require("../models/absen");

const deleteDoc = (path) => {
  fs.unlink(path, function (deleteFileError) {
    if (deleteFileError) {
      console.log("deleteFileError", deleteFileError);
    }
  });
};

const deleteDocs = async (nidn, model, fileProp) => {
  try {
    const collections = await model.find({ nidn });

    if (collections && collections.length) {
      collections.forEach((collection) => {
        deleteDoc(collection[fileProp]);
      });

      // delete collections
      await model.deleteMany({ nidn });
    }
  } catch (deleteCollectionError) {
    console.log("deleteCollectionError", deleteCollectionError);
  }
};

const deletePendidikans = (nidn) => {
  deleteDocs(nidn, Pendidikan, "scan_ijazah");
};

const deleteJabatans = async (nidn) => {
  deleteDocs(nidn, Jabatan, "scan_sk");
};

const deletePangkats = async (nidn) => {
  deleteDocs(nidn, Pangkat, "scan_sk");
};

const deleteArsipSkps = async (nidn) => {
  deleteDocs(nidn, ArsipSkp, "scan_sk");
};

const deleteKgbs = async (nidn) => {
  deleteDocs(nidn, Kgb, "scan_sk");
};

const deleteLhkasns = async (nidn) => {
  deleteDocs(nidn, Lhkasn, "scan_sk");
};

const deleteDokumenPenting = (dokumenPenting) => {
  for (let i = 0; i < fields.length; i++) {
    if (i > 0) {
      if (dokumenPenting[fields[i]]) {
        deleteDoc(dokumenPenting[fields[i]]);
      }
    }
  }
};

const deleteDokumenPentings = async (nidn) => {
  try {
    const dokumenPentings = await DokumenPenting.find({ nidn });

    if (dokumenPentings.length) {
      dokumenPentings.forEach((dokumenPenting) => {
        deleteDokumenPenting(dokumenPenting);
      });

      await DokumenPenting.deleteMany({ nidn });
    }
  } catch (deleteDokumenPentingsError) {
    console.log(deleteDokumenPentingsError);
  }
};

const vDeleteAbsenceMaterial = async (_id) => {
  try {
    const oAbsen = await Absen.findOne({ _id });

    deleteDoc(oAbsen.materi);

    // if (aAbsens.length) {
    //   aAbsens.forEach((dokumenPenting) => {
    //     deleteDokumenPenting(dokumenPenting);
    //   });

    //   await Absen.deleteMany({ nidn });
    // }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteDoc,
  deletePendidikans,
  deleteJabatans,
  deletePangkats,
  deleteArsipSkps,
  deleteKgbs,
  deleteLhkasns,
  deleteDokumenPentings,
  deleteDokumenPenting,
  vDeleteAbsenceMaterial,
};
