import "dotenv/config";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import { database } from "../config/database";
import { hashPassword } from "../utils/password";

interface SeedStudentDef {
  nisn: string;
  fullName: string;
  email: string;
  gender: "L" | "P";
  birthDate: string;
  classKey: "7A" | "8A" | "9A";
  attendanceNumber: number;
  guardianName: string;
  parentPhone: string;
  whatsappNumber: string;
  address: string;
}

const STUDENTS_30: SeedStudentDef[] = [
  // ==================== KELAS 7A (10 Siswa) ====================
  {
    nisn: "0064892104",
    fullName: "Yasmine Shavira",
    email: "yasmine.shavira@student.mts.id",
    gender: "P",
    birthDate: "2013-02-10",
    classKey: "7A",
    attendanceNumber: 1,
    guardianName: "Bpk. Hendrawan",
    parentPhone: "081198765432",
    whatsappNumber: "081234567890",
    address: "Jl. Soekarno Hatta No. 10, Malang",
  },
  {
    nisn: "0026010002",
    fullName: "Achmad Shodiq",
    email: "achmad.shodiq@student.mts.id",
    gender: "L",
    birthDate: "2013-05-12",
    classKey: "7A",
    attendanceNumber: 2,
    guardianName: "Bpk. Suryanto",
    parentPhone: "081234567702",
    whatsappNumber: "081298765702",
    address: "Jl. Raya Singosari No. 14, Malang",
  },
  {
    nisn: "0026010003",
    fullName: "Aisyah Nabila",
    email: "aisyah.nabila@student.mts.id",
    gender: "P",
    birthDate: "2013-08-04",
    classKey: "7A",
    attendanceNumber: 3,
    guardianName: "Bpk. Hendra Kusuma",
    parentPhone: "081234567703",
    whatsappNumber: "081298765703",
    address: "Jl. Kertanegara No. 21, Singosari",
  },
  {
    nisn: "0026010004",
    fullName: "Alamsyah Putra",
    email: "alamsyah.putra@student.mts.id",
    gender: "L",
    birthDate: "2013-01-19",
    classKey: "7A",
    attendanceNumber: 4,
    guardianName: "Bpk. Bambang Sutrisno",
    parentPhone: "081234567704",
    whatsappNumber: "081298765704",
    address: "Jl. Tumapel No. 33, Singosari",
  },
  {
    nisn: "0026010005",
    fullName: "Anisa Rahmawati",
    email: "anisa.rahmawati@student.mts.id",
    gender: "P",
    birthDate: "2013-03-27",
    classKey: "7A",
    attendanceNumber: 5,
    guardianName: "Ibu Sri Wahyuni",
    parentPhone: "081234567705",
    whatsappNumber: "081298765705",
    address: "Jl. Rogonoto No. 8, Singosari",
  },
  {
    nisn: "0026010006",
    fullName: "Bagus Setiawan",
    email: "bagus.setiawan@student.mts.id",
    gender: "L",
    birthDate: "2013-07-15",
    classKey: "7A",
    attendanceNumber: 6,
    guardianName: "Bpk. Agus Setiawan",
    parentPhone: "081234567706",
    whatsappNumber: "081298765706",
    address: "Jl. Panglima Sudirman No. 45, Lawang",
  },
  {
    nisn: "0026010007",
    fullName: "Dewi Lestari",
    email: "dewi.lestari@student.mts.id",
    gender: "P",
    birthDate: "2013-09-09",
    classKey: "7A",
    attendanceNumber: 7,
    guardianName: "Bpk. Mulyono",
    parentPhone: "081234567707",
    whatsappNumber: "081298765707",
    address: "Jl. Masjid No. 12, Singosari",
  },
  {
    nisn: "0026010008",
    fullName: "Fajar Nugraha",
    email: "fajar.nugraha@student.mts.id",
    gender: "L",
    birthDate: "2013-11-22",
    classKey: "7A",
    attendanceNumber: 8,
    guardianName: "Bpk. Joko Nugroho",
    parentPhone: "081234567708",
    whatsappNumber: "081298765708",
    address: "Jl. Sidomulyo No. 50, Singosari",
  },
  {
    nisn: "0026010009",
    fullName: "Hendra Wijaya",
    email: "hendra.wijaya@student.mts.id",
    gender: "L",
    birthDate: "2013-04-18",
    classKey: "7A",
    attendanceNumber: 9,
    guardianName: "Bpk. Rudi Wijaya",
    parentPhone: "081234567709",
    whatsappNumber: "081298765709",
    address: "Jl. Mondoroko No. 17, Singosari",
  },
  {
    nisn: "0026010010",
    fullName: "Indah Permatasari",
    email: "indah.permatasari@student.mts.id",
    gender: "P",
    birthDate: "2013-12-03",
    classKey: "7A",
    attendanceNumber: 10,
    guardianName: "Ibu Ratna Sari",
    parentPhone: "081234567710",
    whatsappNumber: "081298765710",
    address: "Jl. Candirenggo No. 29, Singosari",
  },

  // ==================== KELAS 8A (10 Siswa) ====================
  {
    nisn: "0012345678",
    fullName: "Dimas Pratama",
    email: "dimas@student.mts.id",
    gender: "L",
    birthDate: "2012-05-14",
    classKey: "8A",
    attendanceNumber: 1,
    guardianName: "H. Agus Pratama",
    parentPhone: "081234567801",
    whatsappNumber: "081298765401",
    address: "Jl. Soekarno Hatta No. 12, Malang",
  },
  {
    nisn: "0012345679",
    fullName: "Siti Aminah",
    email: "siti.aminah@student.mts.id",
    gender: "P",
    birthDate: "2012-08-21",
    classKey: "8A",
    attendanceNumber: 2,
    guardianName: "Hj. Nurhayati",
    parentPhone: "081234567802",
    whatsappNumber: "081298765402",
    address: "Jl. Veteran No. 45, Malang",
  },
  {
    nisn: "0012345680",
    fullName: "Budi Santoso",
    email: "budi.santoso@student.mts.id",
    gender: "L",
    birthDate: "2012-03-05",
    classKey: "8A",
    attendanceNumber: 3,
    guardianName: "H. Budi Santoso Sr.",
    parentPhone: "081234567803",
    whatsappNumber: "081298765403",
    address: "Jl. Ijen Besar No. 8, Malang",
  },
  {
    nisn: "0026020004",
    fullName: "Abdul Rahman",
    email: "abdul.rahman@student.mts.id",
    gender: "L",
    birthDate: "2012-05-05",
    classKey: "8A",
    attendanceNumber: 4,
    guardianName: "Bpk. Hermawan",
    parentPhone: "081234567804",
    whatsappNumber: "081298765404",
    address: "Jl. Raya Randuagung No. 11, Singosari",
  },
  {
    nisn: "0026020005",
    fullName: "Bunga Lestari",
    email: "bunga.lestari@student.mts.id",
    gender: "P",
    birthDate: "2012-06-14",
    classKey: "8A",
    attendanceNumber: 5,
    guardianName: "Bpk. Suyono",
    parentPhone: "081234567805",
    whatsappNumber: "081298765405",
    address: "Jl. Raya Karanglo No. 23, Singosari",
  },
  {
    nisn: "0026020006",
    fullName: "Cinta Laura",
    email: "cinta.laura@student.mts.id",
    gender: "P",
    birthDate: "2012-07-20",
    classKey: "8A",
    attendanceNumber: 6,
    guardianName: "Ibu Rina Marlina",
    parentPhone: "081234567806",
    whatsappNumber: "081298765406",
    address: "Jl. Perusahaan No. 19, Tunjungtirto",
  },
  {
    nisn: "0026020007",
    fullName: "Erika Putri",
    email: "erika.putri@student.mts.id",
    gender: "P",
    birthDate: "2012-09-11",
    classKey: "8A",
    attendanceNumber: 7,
    guardianName: "Bpk. Wahyu Hidayat",
    parentPhone: "081234567807",
    whatsappNumber: "081298765407",
    address: "Jl. Watugede No. 6, Singosari",
  },
  {
    nisn: "0026020008",
    fullName: "Fajar Alfian",
    email: "fajar.alfian@student.mts.id",
    gender: "L",
    birthDate: "2012-10-25",
    classKey: "8A",
    attendanceNumber: 8,
    guardianName: "Bpk. Dedi Kurniawan",
    parentPhone: "081234567808",
    whatsappNumber: "081298765408",
    address: "Jl. Banjararum No. 31, Singosari",
  },
  {
    nisn: "0026020009",
    fullName: "Gina Sari",
    email: "gina.sari@student.mts.id",
    gender: "P",
    birthDate: "2012-11-30",
    classKey: "8A",
    attendanceNumber: 9,
    guardianName: "Ibu Yuli Astuti",
    parentPhone: "081234567809",
    whatsappNumber: "081298765409",
    address: "Jl. Pagentan No. 15, Singosari",
  },
  {
    nisn: "0026020010",
    fullName: "Ika Nurlia",
    email: "ika.nurlia@student.mts.id",
    gender: "P",
    birthDate: "2012-12-17",
    classKey: "8A",
    attendanceNumber: 10,
    guardianName: "Bpk. Taufik Hidayat",
    parentPhone: "081234567810",
    whatsappNumber: "081298765410",
    address: "Jl. Baturetno No. 42, Singosari",
  },

  // ==================== KELAS 9A (10 Siswa) ====================
  {
    nisn: "0026030001",
    fullName: "Aang Kunaefi",
    email: "aang.kunaefi@student.mts.id",
    gender: "L",
    birthDate: "2011-03-12",
    classKey: "9A",
    attendanceNumber: 1,
    guardianName: "Bpk. Suparno",
    parentPhone: "081234567901",
    whatsappNumber: "081298765901",
    address: "Jl. Sidomulyo No. 10, Singosari",
  },
  {
    nisn: "0026030002",
    fullName: "Bambang Pamungkas",
    email: "bambang.pamungkas@student.mts.id",
    gender: "L",
    birthDate: "2011-06-10",
    classKey: "9A",
    attendanceNumber: 2,
    guardianName: "Bpk. Harjono",
    parentPhone: "081234567902",
    whatsappNumber: "081298765902",
    address: "Jl. Kertarajasa No. 18, Singosari",
  },
  {
    nisn: "0026030003",
    fullName: "Cristian Gonzales",
    email: "cristian.gonzales@student.mts.id",
    gender: "L",
    birthDate: "2011-08-30",
    classKey: "9A",
    attendanceNumber: 3,
    guardianName: "Bpk. Rahmat Hidayat",
    parentPhone: "081234567903",
    whatsappNumber: "081298765903",
    address: "Jl. Tunggul Ametung No. 7, Singosari",
  },
  {
    nisn: "0026030004",
    fullName: "David Beckham",
    email: "david.beckham@student.mts.id",
    gender: "L",
    birthDate: "2011-05-02",
    classKey: "9A",
    attendanceNumber: 4,
    guardianName: "Bpk. Arifin",
    parentPhone: "081234567904",
    whatsappNumber: "081298765904",
    address: "Jl. Ken Arok No. 25, Singosari",
  },
  {
    nisn: "0026030005",
    fullName: "Egy Maulana",
    email: "egy.maulana@student.mts.id",
    gender: "L",
    birthDate: "2011-07-07",
    classKey: "9A",
    attendanceNumber: 5,
    guardianName: "Bpk. Syarifudin",
    parentPhone: "081234567905",
    whatsappNumber: "081298765905",
    address: "Jl. Anusapati No. 11, Singosari",
  },
  {
    nisn: "0026030006",
    fullName: "Firman Utina",
    email: "firman.utina@student.mts.id",
    gender: "L",
    birthDate: "2011-12-15",
    classKey: "9A",
    attendanceNumber: 6,
    guardianName: "Bpk. Hasyim",
    parentPhone: "081234567906",
    whatsappNumber: "081298765906",
    address: "Jl. Tohjaya No. 9, Singosari",
  },
  {
    nisn: "0026030007",
    fullName: "Gede Widiade",
    email: "gede.widiade@student.mts.id",
    gender: "L",
    birthDate: "2011-01-24",
    classKey: "9A",
    attendanceNumber: 7,
    guardianName: "Bpk. Made Suwito",
    parentPhone: "081234567907",
    whatsappNumber: "081298765907",
    address: "Jl. Ranggawuni No. 3, Singosari",
  },
  {
    nisn: "0026030008",
    fullName: "Hendra Bayauw",
    email: "hendra.bayauw@student.mts.id",
    gender: "L",
    birthDate: "2011-04-23",
    classKey: "9A",
    attendanceNumber: 8,
    guardianName: "Bpk. Lukman Hakim",
    parentPhone: "081234567908",
    whatsappNumber: "081298765908",
    address: "Jl. Wisnuwardhana No. 16, Singosari",
  },
  {
    nisn: "0026030009",
    fullName: "Irfan Bachdim",
    email: "irfan.bachdim@student.mts.id",
    gender: "L",
    birthDate: "2011-08-11",
    classKey: "9A",
    attendanceNumber: 9,
    guardianName: "Bpk. Noval Bachdim",
    parentPhone: "081234567909",
    whatsappNumber: "081298765909",
    address: "Jl. Gayatri No. 20, Singosari",
  },
  {
    nisn: "0026030010",
    fullName: "Jack Brown",
    email: "jack.brown@student.mts.id",
    gender: "L",
    birthDate: "2011-11-02",
    classKey: "9A",
    attendanceNumber: 10,
    guardianName: "Ibu Indah Brown",
    parentPhone: "081234567910",
    whatsappNumber: "081298765910",
    address: "Jl. Pararaton No. 5, Singosari",
  },
];

async function seedDatabase(): Promise<void> {
  console.log("Seeding initial data for M-Class...");

  const defaultPasswordHash = await hashPassword("Password123");

  // 1. Seed Admin ("Pak Hendra, pengelola sekolah")
  await database.execute(
    `INSERT INTO users (name, email, password_hash, role, is_active)
     VALUES (?, ?, ?, 'admin', 1)
     ON DUPLICATE KEY UPDATE name = VALUES(name), role = 'admin', is_active = 1`,
    ["Pak Hendra", "admin@mclass.sch.id", defaultPasswordHash]
  );

  // 2. Seed Guru Wali Kelas untuk 7A, 8A, 9A
  const teachersToSeed = [
    {
      name: "Ustadzah Siti Aisyah, S.Pd.",
      email: "aisyah.guru@mclass.sch.id",
      phone: "081234560007",
    },
    {
      name: "Bu Rina, M.Pd.",
      email: "rina.guru@mclass.sch.id",
      phone: "081234560001",
    },
    {
      name: "Ust. Zainal Abidin, S.Ag.",
      email: "zainal.guru@mclass.sch.id",
      phone: "081234560009",
    },
  ];

  const teacherIdsByEmail: Record<string, number> = {};
  for (const t of teachersToSeed) {
    await database.execute(
      `INSERT INTO users (name, email, password_hash, phone, role, is_active)
       VALUES (?, ?, ?, ?, 'guru', 1)
       ON DUPLICATE KEY UPDATE name = VALUES(name), phone = VALUES(phone), role = 'guru', is_active = 1`,
      [t.name, t.email, defaultPasswordHash, t.phone]
    );
    const [tRows] = await database.execute<RowDataPacket[]>(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [t.email]
    );
    if (tRows[0]?.id) {
      teacherIdsByEmail[t.email] = Number(tRows[0].id);
    }
  }

  // 3. Seed Classes (7A, 8A, 9A) pada tabel classes
  const classesToSeed: Array<{
    name: "7A" | "8A" | "9A";
    grade: number;
    teacherEmail: string;
  }> = [
    { name: "7A", grade: 7, teacherEmail: "aisyah.guru@mclass.sch.id" },
    { name: "8A", grade: 8, teacherEmail: "rina.guru@mclass.sch.id" },
    { name: "9A", grade: 9, teacherEmail: "zainal.guru@mclass.sch.id" },
  ];

  const classIdByName: Record<"7A" | "8A" | "9A", number> = {
    "7A": 1,
    "8A": 2,
    "9A": 3,
  };

  for (const cls of classesToSeed) {
    const teacherId = teacherIdsByEmail[cls.teacherEmail] ?? null;
    await database.execute(
      `INSERT INTO classes (name, grade_level, homeroom_teacher_id)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE grade_level = VALUES(grade_level), homeroom_teacher_id = VALUES(homeroom_teacher_id)`,
      [cls.name, cls.grade, teacherId]
    );
    const [cRows] = await database.execute<RowDataPacket[]>(
      `SELECT id FROM classes WHERE name = ? LIMIT 1`,
      [cls.name]
    );
    if (cRows[0]?.id) {
      classIdByName[cls.name] = Number(cRows[0].id);
    }
  }

  // 4. Bersihkan siswa lama yang tidak termasuk dalam 30 siswa resmi agar tiap kelas tepat 10 siswa (No 1..10 tanpa duplikat)
  const validNisnList = STUDENTS_30.map((s) => s.nisn);
  const placeholders = validNisnList.map(() => "?").join(", ");

  const [obsoleteRosterRows] = await database.execute<RowDataPacket[]>(
    `SELECT id, user_id FROM student_roster WHERE nisn NOT IN (${placeholders})`,
    validNisnList
  );

  if (obsoleteRosterRows.length > 0) {
    const obsoleteUserIds = obsoleteRosterRows
      .map((r) => r.user_id)
      .filter((uid): uid is number => uid !== null && uid !== undefined);

    await database.execute(
      `DELETE FROM student_roster WHERE nisn NOT IN (${placeholders})`,
      validNisnList
    );

    if (obsoleteUserIds.length > 0) {
      const userPlaceholders = obsoleteUserIds.map(() => "?").join(", ");
      await database.execute(
        `DELETE FROM users WHERE role = 'siswa' AND id IN (${userPlaceholders})`,
        obsoleteUserIds
      );
    }
  }

  // Seed 30 Siswa ke student_roster & Registerkan akun mereka ke tabel users
  for (const st of STUDENTS_30) {
    const classId = classIdByName[st.classKey];

    // Buat/update akun user siswa terlebih dahulu
    await database.execute(
      `INSERT INTO users (name, email, password_hash, phone, role, is_active)
       VALUES (?, ?, ?, ?, 'siswa', 1)
       ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         phone = VALUES(phone),
         role = 'siswa',
         is_active = 1`,
      [st.fullName, st.email, defaultPasswordHash, st.whatsappNumber]
    );

    const [uRows] = await database.execute<RowDataPacket[]>(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [st.email]
    );
    const userId = (uRows[0]?.id as number | undefined) ?? null;

    // Masukkan/perbarui student_roster dan tautkan user_id (teregistrasi)
    await database.execute<ResultSetHeader>(
      `INSERT INTO student_roster
         (nisn, full_name, gender, birth_date, class_id, attendance_number, guardian_name, parent_phone, whatsapp_number, address, user_id, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
       ON DUPLICATE KEY UPDATE
         full_name = VALUES(full_name),
         gender = VALUES(gender),
         birth_date = VALUES(birth_date),
         class_id = VALUES(class_id),
         attendance_number = VALUES(attendance_number),
         guardian_name = VALUES(guardian_name),
         parent_phone = VALUES(parent_phone),
         whatsapp_number = VALUES(whatsapp_number),
         address = VALUES(address),
         user_id = COALESCE(student_roster.user_id, VALUES(user_id)),
         is_active = 1`,
      [
        st.nisn,
        st.fullName,
        st.gender,
        st.birthDate,
        classId,
        st.attendanceNumber,
        st.guardianName,
        st.parentPhone,
        st.whatsappNumber,
        st.address,
        userId,
      ]
    );
  }

  // 5. Seed Default School Settings & 7-Day Attendance Schedules
  await database.execute(
    `INSERT INTO school_settings (id, school_name, latitude, longitude, radius_m, timezone)
     VALUES (1, 'MTs Al-Ma''arif 02 Singosari', -7.982600, 112.630800, 15, 'Asia/Jakarta')
     ON DUPLICATE KEY UPDATE radius_m = LEAST(radius_m, 15)`
  );

  const schedules = [
    [1, 1, "06:00:00", "07:15:00", "12:00:00"], // Senin
    [2, 1, "06:00:00", "07:15:00", "12:00:00"], // Selasa
    [3, 1, "06:00:00", "07:15:00", "12:00:00"], // Rabu
    [4, 1, "06:00:00", "07:15:00", "12:00:00"], // Kamis
    [5, 1, "06:00:00", "07:15:00", "11:30:00"], // Jumat
    [6, 1, "06:00:00", "07:15:00", "12:00:00"], // Sabtu
    [7, 0, null, null, null],                     // Minggu (Libur)
  ];

  for (const [dayOfWeek, isSchoolDay, checkinOpen, lateAfter, checkinClose] of schedules) {
    await database.execute(
      `INSERT INTO attendance_schedules (day_of_week, is_school_day, checkin_open, late_after, checkin_close)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         is_school_day = VALUES(is_school_day),
         checkin_open = VALUES(checkin_open),
         late_after = VALUES(late_after),
         checkin_close = VALUES(checkin_close)`,
      [dayOfWeek, isSchoolDay, checkinOpen, lateAfter, checkinClose]
    );
  }

  console.log("==========================================");
  console.log("Seeding 30 Siswa (7A, 8A, 9A) & Akun Terdaftar Selesai!");
  console.log("Semua akun menggunakan kata sandi default: Password123");
  console.log("1. [ADMIN WEB] admin@mclass.sch.id");
  console.log("2. [GURU WEB]  rina.guru@mclass.sch.id | aisyah.guru@mclass.sch.id | zainal.guru@mclass.sch.id");
  console.log("3. [30 AKUN SISWA TERDAFTAR]:");
  console.log("   - Kelas 7A (10 Siswa): 0064892104, 0026010002 s.d. 0026010010");
  console.log("   - Kelas 8A (10 Siswa): 0012345678, 0012345679, 0012345680, 0026020004 s.d. 0026020010");
  console.log("   - Kelas 9A (10 Siswa): 0026030001 s.d. 0026030010");
  console.log("==========================================");

  await database.end();
}

seedDatabase().catch((err) => {
  console.error("Failed to seed database:", err);
  process.exit(1);
});
